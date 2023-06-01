RSpec.describe Api::V1::StudentsController, type: :controller do
  describe 'GET #index' do
    it 'returns a successful response' do
      get :index
      expect(response).to be_successful
    end

    it 'returns all students' do
      student1 = create(:student)
      student2 = create(:student)
      get :index
      expect(assigns(:students)).to contain_exactly(student1, student2)
    end
  end

  describe 'GET #show' do
    let(:student) { create(:student) }

    it 'returns a successful response' do
      get :show, params: { id: student.id }
      expect(response).to be_successful
    end

    it 'returns the correct student' do
      get :show, params: { id: student.id }
      expect(assigns(:student)).to eq(student)
    end
  end

  describe 'POST #create' do
    it 'creates a new student with valid attributes' do
      student_attributes = attributes_for(:student)
      expect do
        post :create, params: student_attributes
      end.to change(Student, :count).by(1)
      expect(response).to be_successful
      expect(assigns(:student)).to be_a(Student)
    end

    it 'returns errors with invalid attributes' do
      invalid_attributes = { first_name: nil }
      post :create, params: invalid_attributes
      expect(response).to have_http_status(:unprocessable_entity)
      expect(JSON.parse(response.body)).to have_key('errors')
    end
  end

  describe 'PUT #update' do
    let(:student) { create(:student) }

    it 'updates the student with valid attributes' do
      student = create(:student)
      put :update, params: { id: student.id, first_name: 'Updated Name' }
      student.reload
      expect(student.first_name).to eq('Updated Name')
      expect(response).to be_successful
      expect(assigns(:student)).to eq(student)
    end

    it 'returns errors with invalid attributes' do
      student = create(:student)
      put :update, params: { id: student.id, first_name: nil }
      expect(response).to have_http_status(:unprocessable_entity)
      expect(JSON.parse(response.body)).to have_key('errors')
    end
  end

  describe 'DELETE #destroy' do
    let!(:student) { create(:student) }

    it 'deletes the student' do
      expect do
        delete :destroy, params: { id: student.id }
      end.to change(Student, :count).by(-1)
      expect(response).to be_successful
    end
  end
end
